import axios from "axios";
const BASE_URL = "https://api-in21.leadsquared.com/v2/";
const ACCESS_KEY = "u$r4d65d708457116609b6e2eca73f0c779";
const SECRET_KEY = "5d063f1f1e952594f900e231479acfe299da1e57";

if (!ACCESS_KEY || !SECRET_KEY) {
  console.error(
    "LeadSquared API keys are not set. Please check your environment variables."
  );
}

const leadSquaredApi = axios.create({
  baseURL: BASE_URL,
});

export const createLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Home Form",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createoOffersLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Offers Form",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createoPlanZeroLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan Zero Enquire Now",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createoPlanALead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan A Enquire Now",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createoPlanCLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan C-Plus Enquire Now",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createoPlanMLBLiteLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan MLB Lite Enquire Now",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createoPlanMLBProLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan MLB Pro Enquire Now",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createoPlanMScLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan MSc Enquire Now",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createoPlanVSLLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan NNL-VSL Enquire Now",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createoPlanTHLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan TH Enquire Now",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createoPlanUGLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan UG Enquire Now",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createContactUsLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Contact Us ",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanZeroPrepLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan Zero Connect Request",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanCPrepLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan C-plus Connect Request",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanProPrepLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan MLB Pro Connect Request",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanUGPrepLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan UG Connect Request",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanLitePrepLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan MLB Lite Connect Request",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanAPrepLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan A Connect Request",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanVSLPrepLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan NNL-VSL Connect Request",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanMScPrepLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan MSc Connect Request",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanTHPrepLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan TH Connect Request",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanZeroHelpLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan Zero Need Help",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanProHelpLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan MLB Pro Need Help",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanCHelpLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan C-Plus Need Help",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanUGHelpLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan UG Need Help",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanLiteHelpLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan MLB Lite Need Help",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanAHelpLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan A Need Help",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanMScHelpLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan MSc Need Help",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanVSLHelpLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan NNL-VSL Need Help",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createPlanTHHelpLead = async (formData) => {
  const leadData = [
    {
      Attribute: "FirstName",
      Value: formData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: formData.email,
    },
    {
      Attribute: "Phone",
      Value: formData.phone,
    },
    {
      Attribute: "Notes",
      Value: formData.message,
    },
    {
      Attribute: "Source",
      Value: "Plan TH Need Help",
    },
  ];
  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};

//Buy Now Start
export const createPlanTHBuyNowLead = async (paymentData) => {
  const formattedAmount = String(paymentData.amount).replace(/[^0-9.]/g, "");
  const leadData = [
    {
      Attribute: "FirstName",
      Value: paymentData.name,
    },
    {
      Attribute: "EmailAddress",
      Value: paymentData.email,
    },
    {
      Attribute: "Phone",
      Value: paymentData.number,
    },
    {
      Attribute: "Source",
      Value: "Plan TH Buy Now",
    },
    {
      Attribute: "mx_Amount_Paid",
      Value: formattedAmount,
    },
  ];
  const notesValue = `Plan Name : ${paymentData.planName}, Payment ID : ${paymentData.paymentId}`;
  leadData.push({
    Attribute: "Notes",
    Value: notesValue,
  });

  try {
    const response = await leadSquaredApi.post(
      `/LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`,
      leadData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating lead:",
      error.response?.data || error.message
    );
    throw error;
  }
};
