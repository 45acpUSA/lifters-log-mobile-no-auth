class CreateCoreLifts < ActiveRecord::Migration[6.0]
  def change
    create_table :core_lifts do |t|
      t.float :back_squat
      t.float :front_squat
      t.float :deadlift
      t.float :bench_press
      t.float :strict_press

      t.timestamps
    end
  end
end
