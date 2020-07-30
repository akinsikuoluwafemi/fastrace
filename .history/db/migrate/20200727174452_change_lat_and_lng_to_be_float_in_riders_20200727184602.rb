class ChangeLatAndLngToBeFloatInRiders < ActiveRecord::Migration[6.0]
  def change
    change_column :riders, :lat, :float
  end
end
