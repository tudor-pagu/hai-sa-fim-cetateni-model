import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import ListItem from "../components/ListItem";
import ListCategory from "../components/ListCategory"
export default function Home() {
  return (
    <DefaultLayout>
      <div>
        Home
        <ListCategory text='Banca nationala' open>
          <ListItem>
            Banca nationala e foarte smeche
          </ListItem>
          <ListItem>
            Banca nationala e geniala
          </ListItem>
          <ListCategory text='categorie 2' open>
            <ListItem>
              Sunt inauntru
            </ListItem>
          </ListCategory>
        </ListCategory>
      </div>
    </DefaultLayout>
  )
}
