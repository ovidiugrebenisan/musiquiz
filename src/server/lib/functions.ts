

export async function handleDatabaseQuery<T>(
    queryFunction: () => Promise<T>,
    errorMessage: string,
  ): Promise<T> {
    try {
      return await queryFunction();
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`${errorMessage}: ${error.message}`);
      } else {
        throw new Error(errorMessage);
      }
    }
  }
  

