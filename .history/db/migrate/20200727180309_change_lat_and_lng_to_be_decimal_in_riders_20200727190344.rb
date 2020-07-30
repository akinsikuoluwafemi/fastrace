class ChangeLatAndLngToBeDecimalInRiders < ActiveRecord::Migration[6.0]
  def change
    change_column :riders, :lat, :decimal
    change_column :riders, :lng, :decimal

  end
end
