using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using TMDB.web.Models;

namespace TMDB.web.Controllers
{
    [Route("api/[controller]")]
    public class MoviesController : Controller
    {
        #region Local Variables

        private readonly IRepository _repository;

        #endregion

        #region Constructors

        public MoviesController(IRepository repository)
        {
            _repository = repository;
        }

        #endregion

        public async Task<IActionResult> TopRated(int pageNumber = 1)
        {
            IResponse<Movie> topRatingMovies = await _repository.GetTopRatedAsync(pageNumber);

            return Ok(topRatingMovies);
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> Upcoming(int pageNumber = 1)
        {
            IResponse<Movie> upcomingMoviesResult = await _repository.GetUpcomingAsync(pageNumber);

            return Ok(upcomingMoviesResult);
        }

        public async Task<IActionResult> Search(string query, int pageNumber = 1)
        {
            IResponse<Movie> searchingMoviesResult = await _repository.SearchByTitleAsync(query, pageNumber);
            if (!string.IsNullOrEmpty(query))
                searchingMoviesResult.Query = query.ToUpper();

            return Ok(searchingMoviesResult);
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> Details(int id)
        {
            Movie findingMovie = await _repository.FindByIdAsync(id);

            return Ok(findingMovie);
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
