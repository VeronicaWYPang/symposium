import {writable} from "svelte/store";
import supabase from "$lib/db";

export const organizations = writable([]);

export const getOrganizations = async () => {
  console.log('🎹 GET ORGANIZATIONS');
  const {data, error} = await supabase
    .from("organizations")
    .select()
    .order('name', {ascending: true})

  if (!error) {
    await organizations.set(data);
    // return organizations
  } else {
    console.error(error)
    // return []
  }
  return
  // return data
}

/**
 * Add organization with optimistic UI
 * @param name
 * @param description
 */
export const addOrganization = async (name: string, description: string) => {

  const user = supabase.auth.user()
  let oldValue
    organizations.update(old => {
      oldValue = old
      return [...old, ...data]}
    )

  const {data, error} = await supabase
    .from('organizations')
    .insert([
      { name, description, user_id: user.id }
    ])

  if (error) {
    // reverse the array so the newest is first
    organizations.update(() => oldValue)
    console.error(error)
  }
}

export const removeOrganization = async (id: number) => {
  const user = supabase.auth.user()

  console.log('🎹 organizations',organizations );
  debugger
  // Update current store
  organizations.update(arr => {
    const index = arr.findIndex(organization => {
      return organization.id === id
    })
    if (organizations[index].user_id === user.id) {
      arr.splice(index, 1)
    } else {
      console.error('🎹 ERROR: You are not the owner of this organization')
    }

    if (index !== -1) arr.splice(index, 1);
    return arr
  })
  console.log('🎹 data ehloooooo');

  const {data, error} = await supabase
    .from('organizations')
    .delete()
    .eq('id', id)
  if (!error) {
    return data
    console.log('🎹 data', data);
    // return data
  } else {
    console.error(error)
    // return []
  }

}

// Use

// import { organizations, getOrganizations } from "$lib/organizations/organizations.store";
