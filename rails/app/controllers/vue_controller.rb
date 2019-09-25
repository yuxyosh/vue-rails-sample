class VueController < ActionController::Base
  def vue_transfer
    # response.headers['Service-Worker-Allowed'] = '/'
    render file: 'public/vue/index.html', layout: false
  end
end
