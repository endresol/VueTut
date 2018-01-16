using System.Collections.Generic;
using Agilite.Entities;

namespace Agilite.Services
{
    public interface IAnimalRepository
    {
        IEnumerable<Animal> GetAnimals();

        Animal GetAnimal(int animalId);
        
    }
}