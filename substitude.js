const url = "/fansPages/:fanPageId/posts/:postId"

const kvPairs = {
    fanPageId: 123,
    postId: 321
}

const substituteUrl = (url, kvPairs) => {
  return url
    .split('/')
    .map(item => {
      if (!item.startsWith(':')) {
          return item
      } else {
        const regex = /^:(.+)$/
        if (item.match(regex)){
            const escapedItem = regex.exec(item)[1]
            return kvPairs[escapedItem]
        } else {
            throw Error(`Your ${item} in url ${url} prply is wrong`)
        }
      }
    })
    .join('/')
}

console.log(substituteUrl(url, kvPairs))