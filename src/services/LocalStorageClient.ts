class LocalStorageClient<T> {
  public set(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public get(key: string): T | undefined {
    const item = localStorage.getItem(key);

    if (!item || item === "undefined" || item === "null") return undefined;

    return JSON.parse(item || "");
  }
}

export default LocalStorageClient;
