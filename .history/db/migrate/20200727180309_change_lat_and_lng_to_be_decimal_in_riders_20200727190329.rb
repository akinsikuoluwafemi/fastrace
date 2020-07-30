class ChangeLatAndLngToBeDecimalInRiders < ActiveRecord::Migration[6.0]
  def change
    change_column :riders, :lat, :float
    change_column :riders, :lng, :float

  end
end
