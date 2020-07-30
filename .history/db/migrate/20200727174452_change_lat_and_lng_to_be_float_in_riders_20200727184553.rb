class ChangeLatAndLngToBeFloatInRiders < ActiveRecord::Migration[6.0]
  def change
    change_column :riders, :lat, :new_type
  end
end
