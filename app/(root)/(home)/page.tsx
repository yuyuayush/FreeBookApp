import Filters from '@/components/Filter'
import Header from '@/components/Header'
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import React from 'react'

const page = () => {
  const resources:any =[];
  return (
    <main className='flex-center padding mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            Javascript Mastery Resource
          </h1>

        </div>
          <SearchForm/>
          <Filters/>
          <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Header/>
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          {resources?.length > 0 ? (
              resources.map((resource: any) => (
                <ResourceCard 
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                />
              ))
            ): (
              <p className="body-regular text-white-400">
                No resources found
              </p>
            )}


            </div>
          </section>

      </section>
      
    </main>
  )
}

export default page
