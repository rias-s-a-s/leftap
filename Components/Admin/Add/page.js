"use client"
import { Input, Textarea } from '@material-tailwind/react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
function AddPost() {
    return (
        <>
            <div className='p-4'>
                <div className='container mx-auto bg-blue-800 py-3 px-8 text-center rounded-md text-2xl text-white uppercase'>Datos de vista previa</div>
                <div className='grid md:grid-cols-2'>
                    <div className='p-3'>
                        <Input type='text' label="Tituló del post" />
                    </div>
                    <div className='p-3'>
                        <Input type='text' label="Nombre del autor" />
                    </div>
                    <div className='p-3 md:col-span-2 '>
                        <Textarea label="Breve resumen del contenido" />
                    </div>
                </div>
                <div className='container mx-auto bg-blue-800 py-3 px-8 text-center rounded-md text-2xl text-white uppercase'>Post</div>
                <div className='py-2'>
                    <CKEditor
                        className="border-2 border-cyan-300"
                        editor={ClassicEditor}
                    />

                </div>
            </div>
        </>
    )
}

export default AddPost