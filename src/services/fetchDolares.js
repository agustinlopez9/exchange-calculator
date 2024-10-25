export const fetchDolarBlue = async () => {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares/blue");
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchDolarCCL = async () => {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares/contadoconliqui");
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getDolares = async () => {
  try {
    const dolarBlue = await fetchDolarBlue()
    const ccl = await fetchDolarCCL()
    return {
      dolarBlue,
      ccl
    }
  } catch (error) {
    return error.message
  }
}