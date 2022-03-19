const uuidGenerator = function* () {
    while (true) {
        let time = new Date().getTime()
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
            const random = (time + Math.random() * 16) % 16 | 0
            return (char === 'x' ? random : (random & 0x3 | 0x8)).toString(16)
        })
        yield uuid
    }
}

// Create instance of generator
const blogPostId = uuidGenerator()

// Factory function that returns a blog article object
const blogObjectFactory = function (title, entry, ...tags) {
    return Object.create(null, {
        "id": { value: blogPostId.next().value, enumerable: true },
        "title": { value: title, enumerable: true },
        "body": { value: entry, enumerable: true },
        "tags": { value: tags, enumerable: true },
        "published": { value: Date.now(), enumerable: true }
    })
}

// Create a blog article about your first day at NSS
const firstDay = blogObjectFactory("My first day at NSS", "I felt completely lost", "nss", "life changes", "software")

// Create a blog article about your instructor
const instructor = blogObjectFactory("Our instructor", "This guy is a jerk", "nss", "teachers", "loser")