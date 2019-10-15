# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_15_193636) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "core_lifts", force: :cascade do |t|
    t.float "back_squat"
    t.float "front_squat"
    t.float "deadlift"
    t.float "bench_press"
    t.float "strict_press"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "olympic_lifts", force: :cascade do |t|
    t.float "clean_and_jerk"
    t.float "snatch"
    t.float "clean"
    t.float "jerk"
    t.float "power_clean"
    t.float "power_jerk"
    t.float "power_snatch"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
