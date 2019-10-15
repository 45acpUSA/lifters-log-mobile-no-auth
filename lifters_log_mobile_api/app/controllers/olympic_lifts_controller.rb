class OlympicLiftsController < ApplicationController
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
		params.permit(:clean_and_jerk, :snatch, :clean, :jerk, :power_clean, :power_jerk, :power_snatch)
	end

	def load_lift
		lift = CoreLift.find(params[:id])
	end
end
