import type { RemarkPlugins } from "astro";
import { execSync } from "child_process";

export const remarkModifiedTime: RemarkPlugins[number] = () => {
  return function (_, file) {
    const filepath = file.history[0];
    const command = `git log -1 --pretty="format:%cI" "${filepath}"`;
    let result = execSync(command).toString().trim();

    
    // File is not in git yet
    if (result === "") {
      // TODO: Add specific error handling for when the file is not in git
      result = new Date().toISOString();
    }
    
    // @ts-ignore
    file.data.astro.frontmatter.lastModified = new Date(result);
  };
};
