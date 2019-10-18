class Api::BlogsController < ApplicationController
    def index
        render json: Blog.all
      end

      def create
        @blog = Blog.new(blog_params)
        binding.pry
        if @blog.save
          render json: @blog
        else
          render json: { errors: @blogs.errors }, status: :unprocessable_entity
        end
      end

      def update
        @blog = Blog.find(params[:id])
        @blog.update(blog_params)
        render json: @blog
      end

      def destroy
        Blog.find(params[:id]).destroy
        render json: { message: 'Blog deleted'}
      end
      
      private
        def blog_params
          params.require(:blog).permit(:title, :subtitle, :body, :image, :date)
        end
end
