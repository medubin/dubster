class Api::TemplatesController < ApplicationController
    def show
        @template = Template.find(params[:id])
        render "api/templates/show"
    end

    def index
        if (!current_user)
            render json: "User not found", status: 422
        else
            @templates = current_user.templates
            render "api/templates/index"
        end
    end

    def create
        if (!current_user)
            render json: "User not found", status: 422
        else 
            @template = Template.create(template_params)
            @template.user_id = current_user.id
            @template.save
            render "api/templates/show"
        end
        
    end

    private
    def template_params
      params.require(:template).permit(:name, :category, template_fields_attributes: [:name, :category, :limit])
    end


end
