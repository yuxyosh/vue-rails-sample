class ApplicationController < ActionController::API
  rescue_from Exception,
              with: :response_500

  def response_500(exception)
    render(json: error_message(exception), status: 500)
  end

  def error_message(exception = nil)
    { errors: exception.try(:message) }
  end
end
