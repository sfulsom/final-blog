class CreateBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :subtitle
      t.text :body
      t.date :date
      t.string :image

      t.timestamps
    end
  end
end
