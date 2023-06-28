class LocalStorageClient<T> {
  public set(key: string, data: T) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public get(key: string): T {
    return JSON.parse(localStorage.getItem(key) || "");
  }
}

export default LocalStorageClient;
