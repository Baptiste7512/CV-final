class StaticpagesController < ApplicationController

  def home
  end

  def download_pdf
    send_file "#{Rails.root}/app/assets/images/cv.pdf", type: 'application/pdf', x_sendfile: true
  end
end
