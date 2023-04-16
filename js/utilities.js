function env(path) {
    if (location.href.includes('http://127.0.0.1:5502/')) {
        // this is in dev mode
        return path;
    } else {
        if (location.href.includes('mashoun.github.io/')) {
            // in production mode
            // add /app/ directory to all links
            return '/app/' + path
        }
    }
}

function timo(date){
    dayjs.extend(window.dayjs_plugin_relativeTime);
    dayjs();
    const futureDate = dayjs(date);
    console.log(futureDate.fromNow());
    return futureDate.fromNow()
}

export default {env, timo}