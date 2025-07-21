import AsyncStorage from '@react-native-async-storage/async-storage';

const EMPRESAS_STORAGE_KEY = "links-storage"

type EmpresasStorage = {
    id:string
    name:string
    cnpj:string
    email:string
}

async function get() {
    const storage = await AsyncStorage.getItem(EMPRESAS_STORAGE_KEY)
    const storageObj = storage ? JSON.parse(storage) : []

    return storageObj
}

async function save(newEmpresas:EmpresasStorage) {
    try{
        const storage = await get()
        const updateStorage = JSON.stringify([...storage, newEmpresas])

        await AsyncStorage.setItem(EMPRESAS_STORAGE_KEY,updateStorage)
        console.log(await storage)
    }catch(error){
        throw error
    
    }
}

export const empresasStorage = {get,save}
