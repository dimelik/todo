<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return string
     */
    public function index()
    {
        $posts = Post::with('comments')->get()->sortBy('created_at');
        return $posts->values()->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->input();
        $res = Post::create($data['post']);
        if ($res){
            return response('success', 200)
                ->header('Content-Type', 'text/plain');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();

        $res = Post::where('id', $id)->first()
            ->update(['category' => $data['category']]);

        if(!empty($data['comment']['comment'])){
            $res = DB::table('comments')->insert(
                $data['comment']
            );
        }
        if ($res){
            return response('OK', 200)
                ->header('Content-Type', 'text/plain');
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $countComments = Comment::where('post_id', $id)->delete();
        $result = Post::destroy($id);

        if ($result){
            return response($countComments, 200)
                ->header('Content-Type', 'text/plain');
        }
    }
}
