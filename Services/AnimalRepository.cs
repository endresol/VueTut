using System.Collections.Generic;
using System.Linq;
using Agilite.Entities;

namespace Agilite.Services 
{
    public class AnimalRepository : IAnimalRepository
    {
        private AnimalContext _context;

        public AnimalRepository(AnimalContext context)
        {       
            _context = context; 
        }
        public Animal GetAnimal(int animalId)
        {
            return _context.Animals.Where(a => a.Id == animalId).FirstOrDefault();
        }
        public IEnumerable<Animal> GetAnimals()
        {
            return _context.Animals.OrderBy(a => a.Name).ToList();
        }
    }
}