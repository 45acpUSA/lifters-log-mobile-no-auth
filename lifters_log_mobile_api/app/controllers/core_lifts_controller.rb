class CoreLiftsController < ApplicationController
  before_action :load_lift, except: %i[index create]

  def index
  end

  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def lift_params
		params.permit(:back_squat, :front_squat, :deadlift, :bench_press, :strict_press)
	end

	def load_lift
		lift = CoreLift.find(params[:id])
	end
end
