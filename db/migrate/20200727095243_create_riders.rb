class CreateRiders < ActiveRecord::Migration[6.0]
  def change
    create_table :riders do |t|
      t.string :first_name
      t.string :last_name
      t.string :city
      t.string :state
      t.integer :lat
      t.integer :lng

      t.timestamps
    end
  end
end
