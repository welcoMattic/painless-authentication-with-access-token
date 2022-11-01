<?php

namespace App\Controller\Api;

use App\Repository\ScenarioRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ScenarioController extends AbstractController
{
    public function __construct(
        private readonly ScenarioRepository $scenarioRepository,
    ) {}

    #[Route('/api/scenarios', name: 'app_scenarios')]
    #[Route('/jwt/api/scenarios', name: 'app_scenarios_jwt')]
    public function index(): Response
    {
        return new JsonResponse($this->scenarioRepository->findAll());
    }
}
