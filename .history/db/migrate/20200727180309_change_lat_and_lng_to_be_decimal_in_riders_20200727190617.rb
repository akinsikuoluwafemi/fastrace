class ChangeLatAndLngToBeDecimalInRiders < ActiveRecord::Migration[6.0]
  def change
    change_column :riders, :lat, :decimal :multiplier, precision: 3, scale: 2
    change_column :riders, :lng, :decimal :multiplier, precision: 3, scale: 2

  end
end
