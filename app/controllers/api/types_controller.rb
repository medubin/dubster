class Api::TypesController < ApplicationController
    def show
        @type = Type.find(params[:id])
        render "api/types/show"
    end

    def index
        if (!current_user)
            render json: "User not found", status: 422
        else
            @types = current_user.types
            render "api/types/index"
        end
    end

    def create
        if (!current_user)
            render json: "User not found", status: 422
        else 
            @type = Type.create(type_params)
            @type.user_id = current_user.id
            @type.save
            render "api/types/show"        
        end
        
    end

    private
    def type_params
      params.require(:type).permit(:name, :category, type_fields_attributes: [:name, :category, :limit])
    end


end
