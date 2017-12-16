class CreateTemplateFields < ActiveRecord::Migration[5.1]
  def change
    create_table :template_fields do |t|
      t.integer :template_id, null: false
      t.string :name, null: false
      t.string :category, null: false
      t.integer :limit, default: nil
      t.timestamps
    end
  end
end
