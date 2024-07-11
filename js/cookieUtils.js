// cookieUtils.js

export function setCookieWithExpireDay(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function setCookieWithExpireHour(cname, cvalue, exhour) {
    const d = new Date();
    d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function setCookieWithExpireSecond(cname, cvalue, exsecs) {
    const d = new Date();
    d.setTime(d.getTime() + (exsecs * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function deleteCookie(cname) {
    document.cookie = cname + "= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
 * Sets a cookie with a specified expiration time and domain.
 *
 * @param {String} cname - The name of the cookie.
 * @param {String} cvalue - The value of the cookie.
 * @param {String} domain - The domain where the cookie is valid.
 * @param {Number} exhour - The number of hours until the cookie expires.
 */
export const setCookieWithExpireHourSubDomain = (cname, cvalue, domain, exhour) => {
    const d = new Date();
    d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=" + domain + ";path=/";
};
