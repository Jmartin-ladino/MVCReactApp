using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using MVCReactApp2.Server.Models;

namespace MVCReactApp2.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmpleadoesController : Controller
    {
        private readonly ReactMvcContext _context;

        public EmpleadoesController(ReactMvcContext context)
        {
            _context = context;
        }

        // GET: Empleadoes
        [HttpGet]
        public async Task<List<Empleado>> Index()
        {
            List<Empleado> lista = await _context.Empleados.ToListAsync();
            return lista;
        }
    }
}
