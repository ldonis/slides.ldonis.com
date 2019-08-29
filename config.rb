
activate :autoprefixer do |prefix|
    prefix.browsers = "last 10 versions"
end

# Layouts
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

activate :directory_indexes

activate :deploy do |deploy|
    deploy.deploy_method = :git
    deploy.build_before = true
    deploy.branch = 'production'
end

configure :build do
    activate :minify_css
    activate :minify_javascript
end
