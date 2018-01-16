using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Agilite.Models;
using Agilite.Services;
using Microsoft.AspNetCore.Mvc;

namespace Agilite.Controllers
{   
    [Route("api/animals")]    
    public class AnimalController : Controller
    {
        private IAnimalRepository _animalRepository;
        
        public AnimalController(IAnimalRepository animalRepository)
        {
           _animalRepository = animalRepository; 
        }
        [HttpGet()]
        public IActionResult GetAnimals()
        {
            var animalEntities = _animalRepository.GetAnimals();

            var result = new List<AnimalDto>();

            foreach (var animalEntity in animalEntities)
            {
                result.Add( new AnimalDto
                {
                    id = animalEntity.Id,
                    name = animalEntity.Name
                });
            }

            return Ok(result);
        }

        [HttpGet("{id}")]
        public IActionResult getAnimal(int id) 
        {
            return Ok();
        }
    }
}