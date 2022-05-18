import supabase from "$lib/db";
// import {organizations} from "$lib/organizations/organizations.store";

/**
 * Get organizations
 * @returns {organizations}
 */
export const getOrganizations = async () => {
  // const {data, error} = await supabase.from("organizations").select();
  const { data: organizations, error } = await supabase
    .from('organizations')
    .select()
    .order('name', { ascending: true })

  if (!error) {
    return organizations
  }
  else {
    console.error(error)
    return []
  }
};

export const addOrganization = async (name:string, description:string) => {

  const { data, error } = await supabase
    .from('organizations')
    .insert([
      { name, description },
    ])
  console.log('🎹 data',data );

  if (!error) {
    return data
  }
  else {
    console.error(error)
    return []
  }
};



