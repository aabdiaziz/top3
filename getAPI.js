let getGithubRepo = async () => {
    let source = await fetch('apiStructure.hbs')
    let template = Handlebars.compile(await source.text())


    let data = await fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
    let dataObject = await data.json()
    let top3 = dataObject.items.slice(0,3)
    let results = {data: top3}

    $('.container').append(template(results))


}



getGithubRepo()
