
# · Layouts
page '/*.html', layout: "default"
page '/*.json', layout: false
page '/*.xml', layout: false
page '/*.txt', layout: false



# · Activate and configure extensions
activate :directory_indexes

activate :inline_svg

activate :livereload

activate :i18n



# · extensions settings
activate :autoprefixer do |prefix|
    prefix.browsers = "last 10 versions"
end



# · deploy settings 
activate :deploy do |deploy|
    deploy.build_before = true
    deploy.deploy_method = :git
    deploy.branch = "production"
end



# · 
configure :build do
    activate :minify_css
end
