module.exports = {
  apps: [
    {
      name: "backend",
      script: "npm",
      args: "run dev", 
      cwd: "backend",
      watch: true,
      out_file: "./out_backend.log",
      error_file: "./error_backend.log",
      merge_logs: true,
      log_date_format: "DD-MM HH:mm:ss Z",
      log_type: "json",
    },
    {
      name: "frontend",
      script: "npm",
      args: "start", 
      cwd: "frontend",
      watch: true,
      out_file: "./out_backend.log",
      error_file: "./error_backend.log",
      merge_logs: true,
      log_date_format: "DD-MM HH:mm:ss Z",
      log_type: "json",
    }
  ]
};
