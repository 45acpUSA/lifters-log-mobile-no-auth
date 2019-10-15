class CreateOlympicLifts < ActiveRecord::Migration[6.0]
  def change
    create_table :olympic_lifts do |t|
      t.float :clean_and_jerk
      t.float :snatch
      t.float :clean
      t.float :jerk
      t.float :power_clean
      t.float :power_jerk
      t.float :power_snatch

      t.timestamps
    end
  end
end
