require_relative('farm_time')
# Fill me in
# Require all the animals up here

class Farm

  def initialize
    @time = FarmTime.new
  end

  def run
    while @time.day < 3
      @time.another_day_passes

      case @time.day
      when 1
        # Fill me in
      when 2
        # Fill me in
      when 3
        # Fill me in
      end

    end
  end

end

