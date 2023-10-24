const logger = (status, url, method) => {
  const dateLog = new Date(Date.now()).toLocaleString();

  console.log(
    `\x1b[33m[${method}]\x1b[0m`,
    status === 200 ? `\x1b[32m${status}\x1b[0m` : `\x1b[31m${status}\x1b[0m`,
    `path:\x1b[32m"${url}"\x1b[0m`,
    dateLog
  );
};

exports.logger = logger;
