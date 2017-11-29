class CreateTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :types do |t|
      t.string :name, null: false
      t.string :category null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
