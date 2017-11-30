class Api::TypesController < ApplicationController
    def show
        @type = Type.find(params[:id])
        render "api/types/show"
    end

    def index
        if (!current_user)
            render json: "User not found", status: 422
        end
        @types = current_user.types
        render "api/types/index"
    end

    def create
    end

    private
    def activity_params
      params.require(:type).permit(:name, :category, :user_id)
    end


end
