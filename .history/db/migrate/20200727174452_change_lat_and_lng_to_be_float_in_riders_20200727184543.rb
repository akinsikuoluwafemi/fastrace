class ChangeLatAndLngToBeFloatInRiders < ActiveRecord::Migration[6.0]
  def change
    change_column :riders, :column_name, :new_type
  end
end
