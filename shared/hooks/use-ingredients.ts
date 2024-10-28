import { Api } from '@/shared/services/api-client'
import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'

export const useIngredients = () => {
  const [ingredients, setIngredinets] = useState<Ingredient[]>([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true)
        const ingredients = await Api.ingredients.getAll()
        setIngredinets(ingredients)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchIngredients()
  }, [])

  return {
    ingredients,
    loading,
  }
}
